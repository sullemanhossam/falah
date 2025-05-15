import { RiAddFill } from '@remixicon/react';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

export default function StudyRequestsCell() {
  const study_requests = useQuery(api.study_requests.get);

  if (!study_requests) {
    return (
         <div className="relative">
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <li className="h-44 rounded-tremor-default bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle" />
            <li className="h-44 rounded-tremor-default bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle" />
            <li className="hidden h-44 rounded-tremor-default bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle sm:block" />
            <li className="hidden h-44 rounded-tremor-default bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle sm:block" />
            <li className="hidden h-44 rounded-tremor-default bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle sm:block" />
            <li className="hidden h-44 rounded-tremor-default bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle sm:block" />
          </ul>
          {/* Change dark:from-gray-950 in parent below according to your dark mode background */}
          <div className="absolute inset-x-0 bottom-0 flex h-32 flex-col items-center justify-center bg-gradient-to-t from-white to-transparent dark:from-gray-950">
            <p className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              No study requests created yet
            </p>
            <p className="mt-2 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Create your first study request to get started
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-1.5 whitespace-nowrap rounded-tremor-small bg-tremor-brand px-3 py-2 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-dropdown hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-dropdown dark:hover:bg-dark-tremor-brand-emphasis"
            >
              <RiAddFill className="-ml-1 size-5 shrink-0" aria-hidden={true} />
              Browse studies
            </button>
          </div>
        </div>
    );
  }

  return (
    //  <>
    //   <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    //     {data.map((item) => (
    //       <Card
    //         key={item.name}
    //         className="hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background-muted"
    //       >
    //         <dd className="flex items-center justify-between space-x-4 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
    //           <span>{item.tag}</span>
    //           <span>{item.lastEdited}</span>
    //         </dd>
    //         <dt className="mt-3 truncate font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
    //           <a href={item.href} className="focus:outline-none">
    //             {/* Extend link to entire card */}
    //             <span className="absolute inset-0" aria-hidden={true} />
    //             {item.name}
    //           </a>
    //         </dt>
    //         <div className="mt-4 flex flex-wrap gap-2">
    //           {item.status === 'live' ? (
    //             <span className="inline-flex items-center gap-x-1.5 rounded-tremor-small bg-emerald-100 px-2 py-1 text-tremor-label font-medium text-emerald-800 ring-1 ring-inset ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-500 dark:ring-emerald-500/20">
    //               <span
    //                 className="size-1.5 shrink-0 rounded-full bg-emerald-500"
    //                 aria-hidden={true}
    //               />
    //               {item.status}
    //             </span>
    //           ) : (
    //             <span className="inline-flex items-center rounded-tremor-small bg-gray-100 px-2 py-1 text-tremor-label font-medium text-gray-600 ring-1 ring-inset ring-gray-600/10 dark:bg-gray-500/10 dark:text-gray-500 dark:ring-gray-500/20">
    //               {item.status}
    //             </span>
    //           )}
    //           {item.type === 'API' ? (
    //             <span className="inline-flex items-center gap-x-1.5 rounded-tremor-small bg-pink-100 px-2 py-1 text-tremor-label font-medium text-pink-800 ring-1 ring-inset ring-pink-600/10 dark:bg-pink-500/10 dark:text-pink-500 dark:ring-pink-500/20">
    //               <RiWifiLine
    //                 className="h-3.5 w-3.5 shrink-0"
    //                 aria-hidden={true}
    //               />
    //               {item.type}
    //             </span>
    //           ) : (
    //             <span className="inline-flex items-center gap-x-1.5 rounded-tremor-small bg-sky-100 px-2 py-1 text-tremor-label font-medium text-sky-800 ring-1 ring-inset ring-sky-600/10 dark:bg-sky-500/10 dark:text-sky-500 dark:ring-sky-500/20">
    //               <RiStackLine
    //                 className="h-3.5 w-3.5 shrink-0"
    //                 aria-hidden={true}
    //               />
    //               {item.type}
    //             </span>
    //           )}
    //         </div>
    //       </Card>
    //     ))}
    //   </dl>
    // </>
      <>
      {study_requests.map((request: any) => (
          <div key={request._id} className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">{request.title}</h3>
          <p className="text-sm text-gray-600">{request.description}</p>
        </div>
      ))}
      </>
  );
}