import classNames from "classnames";

export function cn(...classes: (string | undefined | false)[]) {
  return classNames(...classes);
}