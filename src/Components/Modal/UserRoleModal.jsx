import { Description, Field, Label, Select } from '@headlessui/react'
import clsx from 'clsx'
import { FaSortDown } from 'react-icons/fa'

const UserRoleModal = () => {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm font-semibold text-white">
          Project Status
        </Label>

        <Description className="text-sm text-white/50">
          Visible to clients in dashboard
        </Description>

        <div className="relative">
          <Select
            className={clsx(
              "mt-3 block w-full appearance-none rounded-xl",
              "bg-black/60 backdrop-blur-xl border border-white/10",
              "py-2 px-4 text-sm text-white",
              "focus:outline-none focus:ring-2 focus:ring-green-400/40"
            )}
          >
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </Select>

          <FaSortDown className="absolute pointer-events-none top-3 right-3 text-white/60" />
        </div>
      </Field>
    </div>
  )
}

export default UserRoleModal