import AddIcon from 'mdi-react/AddIcon'
import { ExtensionsAreaHeaderActionButton } from '../../extensions/ExtensionsAreaHeader'
import { extensionsAreaHeaderActionButtons } from '../../extensions/extensionsAreaHeaderActionButtons'

export const enterpriseExtensionsAreaHeaderActionButtons: ReadonlyArray<ExtensionsAreaHeaderActionButton> = [
    ...extensionsAreaHeaderActionButtons,
    {
        label: 'Publish new extension',
        to: () => '/extensions/registry/new',
        icon: AddIcon,
        condition: context => context.isPrimaryHeader,
    },
]
