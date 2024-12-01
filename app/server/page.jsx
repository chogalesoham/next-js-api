import Link from "next/link";

export default async function ServerProduct() {
  // Fetch data from API
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  return (
    <div>
      <h1>Get Product In SSR</h1>
      <ul>
        {data.users.map((user) => (
          <Link href={`server/${user.id}`} key={user.id}>
            {" "}
            <li>
              {user.firstName} {user.lastName}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
