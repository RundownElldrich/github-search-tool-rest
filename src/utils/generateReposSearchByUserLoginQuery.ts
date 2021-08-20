export default function generateReposSearchByUserLoginQuery(login:string) {
  return `?q=user:${login}`;
}
