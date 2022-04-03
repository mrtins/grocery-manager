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
        'new-transaction-button',
        `${
          !collapseSidebar
            ? 'w-36 flex justify-evenly items-center'
            : 'flex mb-6'
        } `,
      )}
    >
      <HiPlus /> {!collapseSidebar && 'Novo'}
    </button>
  );
}
