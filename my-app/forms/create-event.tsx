// import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
// import { api } from "@/convex/_generated/api";
// import { fetchMutation, fetchQuery } from "convex/nextjs";
// import { revalidatePath } from "next/cache";
 
// export default async function PureServerPage() {
// //   const tasks = await fetchQuery(api.tasks.list, { list: "default" });
//   async function createTask(formData: FormData) {
//     "use server";
 
//     await fetchMutation(
//       api.tasks.create,
//       {
//         text: formData.get("text") as string,
//       },
//       { token: await convexAuthNextjsToken() },
//     );
//     revalidatePath("/example");
//   }
//   // render tasks and task creation form
//   return <form action={createTask}>...</form>;
// }