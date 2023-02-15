import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { Button } from "components/Button";
import styles from "./Search.module.scss";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FromFields = {
  username: HTMLInputElement
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FromFields>) => {
    event.preventDefault();

    const text = event.currentTarget.username.value

    if (text.trim()) {
      onSubmit(text)
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username"
        />
        {hasError && <div className={styles.error}>No result</div>}

        <Button>Search</Button>
      </div>
    </form>
  );
};
