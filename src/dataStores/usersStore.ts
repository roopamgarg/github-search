import { create } from 'zustand'
import { githubSearch } from '../Services/githubSearch';


interface IGithubUser {
  id: number;
  avatar_url: string;
  login: string;
  score: number;
  html_url: string;
}

interface IGithubUsersStore {
  users: IGithubUser[],
  searchUsers: any
}

export const githubUsersStore = create<IGithubUsersStore>((set) => ({
    users: [],
    searchUsers: debounce(async (query: string) => {
    const response = await githubSearch(query);
    if(response && response.items){
        console.log(response.items);
        set({users:response.items});
    };
  }, 500)
}))

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null;

  return function (...args: Parameters<T>): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
