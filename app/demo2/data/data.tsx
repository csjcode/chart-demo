import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StarFilled,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Docs",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Validating...",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "✅ Done",
    icon: CheckCircledIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "✅ Done",
    icon: CheckCircledIcon,
  },
]

export const priorities = [
  {
    label: "⭐️",
    value: "low",
    icon: StarFilled,
  },
  {
    label: "⭐️⭐️",
    value: "medium",
    icon: StarFilled,
  },
  {
    label: "⭐️⭐️⭐️",
    value: "high",
    icon: StarFilled,
  },
]
