import classNames, { type Argument } from "classnames";

export function cn<T extends Argument>(...classes: T[]): string {
  return classNames(...classes);
}
