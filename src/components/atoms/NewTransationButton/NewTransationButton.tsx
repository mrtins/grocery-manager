import classNames from 'classnames';
import { HiPlus } from 'react-icons/hi';

interface NewTransationButtonProps {
  collapseSidebar: boolean;
  handleClick: () => void;
}

export default function NewTransationButton({
  collapseSidebar,
  handleClick,
}: NewTransationButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(
        'new-transaction-button flex',
        `${!collapseSidebar ? 'w-36 justify-evenly items-center' : 'mb-6'} `,
      )}
    >
      <HiPlus /> <span>{!collapseSidebar && 'Novo'}</span>
    </button>
  );
}
