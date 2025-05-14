// 'use client';

import { RiExternalLinkLine, RiFileLine } from "@remixicon/react";
import { List, ListItem, Tab, TabGroup, TabList } from "@tremor/react";

const bills = [
  {
    id: 1,
    month: "Sept 23",
    status: "unpaid",
    href: "#",
  },
  {
    id: 2,
    month: "Aug 23",
    status: "paid",
    href: "#",
  },
  {
    id: 3,
    month: "Jul 23",
    status: "paid",
    href: "#",
  },
];

export default function Example() {
  return (
    <>
      <h3 className="text-tremor-title font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Settings
      </h3>
      <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
        Manage your personal details, workspace governance and notifications.
      </p>
      <TabGroup defaultIndex={2} className="mt-6">
        {/* note to user: Remove defaultIndex if controlled state should be applied */}
        <TabList>
          <Tab>Account detail</Tab>
          <Tab>Workspaces</Tab>
          <Tab>Billing</Tab>
        </TabList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabPanels>, <TabPanel> to make it functional and to add content for other tabs */}
        <div className="mt-8 sm:max-w-3xl">
          <div className="rounded-tremor-small bg-tremor-background-muted p-6 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background-muted dark:ring-dark-tremor-ring">
            <h4 className="text-tremor-default font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Want to upgrade?
            </h4>
            <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
              Elevate your workspace and boost productivity with premium
              features. See our pro plans and upgrade today.
            </p>
            <div className="mt-6 flex items-center space-x-2">
              <a
                href="#"
                className="inline-flex h-8 items-center whitespace-nowrap rounded-tremor-small bg-tremor-brand px-3 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
              >
                Pro Plans
              </a>
              <button
                type="button"
                className="inline-flex h-8 items-center whitespace-nowrap rounded-tremor-small border border-tremor-border bg-tremor-background px-3 py-2 text-tremor-default font-medium text-tremor-content shadow-tremor-input hover:text-tremor-content-emphasis dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-content dark:shadow-dark-tremor-input hover:dark:text-dark-tremor-content-emphasis"
              >
                Dismiss
              </button>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Payment history
            </h4>
            <p className="mt-2 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              See previous and upcoming payments
            </p>
            <List className="mt-4">
              {bills.map((item) => (
                <ListItem key={item.id} className="py-2.5 px-2">
                  <div className="flex items-center space-x-3">
                    <RiFileLine
                      className="size-5 text-tremor-content dark:text-dark-tremor-content"
                      aria-hidden={true}
                    />
                    <span className="text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                      {item.month}
                    </span>
                  </div>
                  <a
                    className="font-semibold text-tremor-brand hover:text-tremor-brand-emphasis dark:text-dark-tremor-brand hover:dark:text-dark-tremor-brand-emphasis"
                    href={item.href}
                  >
                    Receipt
                  </a>
                </ListItem>
              ))}
            </List>
          </div>
          <p className="mt-6 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Need help? Reach out to our{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 text-tremor-brand hover:underline hover:underline-offset-4 dark:text-dark-tremor-brand"
            >
              help desk
              <RiExternalLinkLine className="size-4" aria-hidden={true} />
            </a>{" "}
            upgrade options if you need assistance.
          </p>
        </div>
      </TabGroup>
    </>
  );
}
