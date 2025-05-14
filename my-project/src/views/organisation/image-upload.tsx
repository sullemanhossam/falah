import {
  RiCloseLine,
  RiErrorWarningFill,
  RiFileCloseLine,
  RiUpload2Line,
} from "@remixicon/react";

export function ImageUpload() {
  return (
    <>
      <div className="sm:mx-auto sm:max-w-lg">
        <form>
          <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            File Upload
          </h3>
          <div className="mt-4 flex justify-center space-x-4 rounded-tremor-default border border-dashed border-gray-300 px-6 py-10 dark:border-dark-tremor-border">
            <div className="sm:flex sm:items-center sm:space-x-3">
              <RiUpload2Line
                className="mx-auto h-8 w-8 text-tremor-content-subtle dark:text-dark-tremor-content sm:mx-0 sm:h-6 sm:w-6"
                aria-hidden={true}
              />
              <div className="mt-4 flex text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content sm:mt-0">
                <p>Drag and drop or</p>
                <label
                  htmlFor="file-upload-6"
                  className="relative cursor-pointer rounded-tremor-small pl-1 font-medium text-tremor-brand hover:underline hover:underline-offset-4 dark:text-dark-tremor-brand"
                >
                  <span>choose file</span>
                  <input
                    id="file-upload-6"
                    name="file-upload-6"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">to upload</p>
              </div>
            </div>
          </div>
          <p className="mt-2 flex items-center justify-between text-tremor-label leading-5 text-tremor-content dark:text-dark-tremor-content">
            Recommended maximum size: 10 MB, Accepted file types: XLSX, XLS,
            CSV.
          </p>
          <div className="mt-6 flex items-center space-x-2.5 rounded-tremor-default bg-red-50 p-4 dark:bg-red-500/10">
            <RiErrorWarningFill
              className="size-5 shrink-0 text-red-500 dark:text-red-500"
              aria-hidden={true}
            />
            <p className="text-tremor-default text-red-600 dark:text-red-500">
              Uploaded file exceeds maximum size of 10 MB
            </p>
          </div>
          <div className="relative mt-4 rounded-tremor-default bg-tremor-background-muted p-4 dark:bg-dark-tremor-background-muted">
            <div className="absolute right-1 top-1">
              <button
                type="button"
                className="rounded-tremor-small p-2 text-tremor-content-subtle hover:text-tremor-content dark:text-dark-tremor-content-subtle hover:dark:text-tremor-content"
                aria-label="Remove"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
              </button>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-tremor-small bg-tremor-background shadow-tremor-input ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background dark:shadow-dark-tremor-input dark:ring-dark-tremor-ring">
                <RiFileCloseLine
                  className="size-5 text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis"
                  aria-hidden={true}
                />
              </span>
              <div className="w-full">
                <p className="text-tremor-label font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Revenue_Q1_2024.xlsx
                </p>
                <p className="mt-0.5 flex justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                  <span>12.3 MB</span>
                  <span className="font-medium text-red-500 dark:text-red-500">
                    Failed
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-end space-x-3">
            <button
              type="button"
              className="whitespace-nowrap rounded-tremor-small border border-tremor-border px-4 py-2 text-tremor-default font-medium text-tremor-content shadow-tremor-input transition-all hover:bg-tremor-background-muted hover:text-tremor-content-emphasis dark:border-dark-tremor-border dark:text-dark-tremor-content dark:shadow-dark-tremor-input hover:dark:bg-dark-tremor-background-muted hover:dark:text-dark-tremor-content-emphasis"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input transition-all hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export function ImageUploadError() {
  return (
    <>
      <div className="sm:mx-auto sm:max-w-lg">
        <form>
          <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            File Upload
          </h3>
          <div className="mt-4 flex justify-center space-x-4 rounded-tremor-default border border-dashed border-gray-300 px-6 py-10 dark:border-dark-tremor-border">
            <div className="sm:flex sm:items-center sm:space-x-3">
              <RiUpload2Line
                className="mx-auto h-8 w-8 text-tremor-content-subtle dark:text-dark-tremor-content sm:mx-0 sm:h-6 sm:w-6"
                aria-hidden={true}
              />
              <div className="mt-4 flex text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content sm:mt-0">
                <p>Drag and drop or</p>
                <label
                  htmlFor="file-upload-6"
                  className="relative cursor-pointer rounded-tremor-small pl-1 font-medium text-tremor-brand hover:underline hover:underline-offset-4 dark:text-dark-tremor-brand"
                >
                  <span>choose file</span>
                  <input
                    id="file-upload-6"
                    name="file-upload-6"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">to upload</p>
              </div>
            </div>
          </div>
          <p className="mt-2 flex items-center justify-between text-tremor-label leading-5 text-tremor-content dark:text-dark-tremor-content">
            Recommended maximum size: 10 MB, Accepted file types: XLSX, XLS,
            CSV.
          </p>
          <div className="mt-6 flex items-center space-x-2.5 rounded-tremor-default bg-red-50 p-4 dark:bg-red-500/10">
            <RiErrorWarningFill
              className="size-5 shrink-0 text-red-500 dark:text-red-500"
              aria-hidden={true}
            />
            <p className="text-tremor-default text-red-600 dark:text-red-500">
              Uploaded file exceeds maximum size of 10 MB
            </p>
          </div>
          <div className="relative mt-4 rounded-tremor-default bg-tremor-background-muted p-4 dark:bg-dark-tremor-background-muted">
            <div className="absolute right-1 top-1">
              <button
                type="button"
                className="rounded-tremor-small p-2 text-tremor-content-subtle hover:text-tremor-content dark:text-dark-tremor-content-subtle hover:dark:text-tremor-content"
                aria-label="Remove"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
              </button>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-tremor-small bg-tremor-background shadow-tremor-input ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background dark:shadow-dark-tremor-input dark:ring-dark-tremor-ring">
                <RiFileCloseLine
                  className="size-5 text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis"
                  aria-hidden={true}
                />
              </span>
              <div className="w-full">
                <p className="text-tremor-label font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Revenue_Q1_2024.xlsx
                </p>
                <p className="mt-0.5 flex justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                  <span>12.3 MB</span>
                  <span className="font-medium text-red-500 dark:text-red-500">
                    Failed
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-end space-x-3">
            <button
              type="button"
              className="whitespace-nowrap rounded-tremor-small border border-tremor-border px-4 py-2 text-tremor-default font-medium text-tremor-content shadow-tremor-input transition-all hover:bg-tremor-background-muted hover:text-tremor-content-emphasis dark:border-dark-tremor-border dark:text-dark-tremor-content dark:shadow-dark-tremor-input hover:dark:bg-dark-tremor-background-muted hover:dark:text-dark-tremor-content-emphasis"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input transition-all hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
