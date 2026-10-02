// Datos vivos de GitHub, pedidos en tiempo de build. Si la API falla o se agota el
// rate limit, el sitio se construye igual: todo lo que sale de aquí es opcional.

export interface RepoData {
  name: string;
  description: string | null;
  language: string | null;
  topics: string[];
  homepage: string | null;
  pushed_at: string;
  stargazers_count: number;
  fork: boolean;
}

let cache: Promise<RepoData[]> | undefined;

export function getRepos(user: string): Promise<RepoData[]> {
  cache ??= fetchRepos(user);
  return cache;
}

async function fetchRepos(user: string): Promise<RepoData[]> {
  const token = process.env.GITHUB_TOKEN;
  try {
    const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`, {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
    const repos = (await res.json()) as RepoData[];
    return repos.filter((r) => !r.fork);
  } catch (err) {
    console.warn(`[github] sin datos vivos, se usa solo el contenido local (${(err as Error).message})`);
    return [];
  }
}

/** Fecha del último push entre varios repos, o `undefined` si no hay datos. */
export function lastPush(repos: RepoData[], names: string[]): Date | undefined {
  const dates = repos.filter((r) => names.includes(r.name)).map((r) => new Date(r.pushed_at).getTime());
  return dates.length ? new Date(Math.max(...dates)) : undefined;
}

export function formatMonth(date: Date): string {
  return new Intl.DateTimeFormat('es-CO', { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(date)
    .replace('.', '');
}
