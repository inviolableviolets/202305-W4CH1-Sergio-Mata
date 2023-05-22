type PropsType = {
  title: string;
  subtitle: string;
};

export function Header({ title, subtitle }: PropsType) {
  return (
    <>
      <header className="header">
        <h1>{title.toUpperCase()}</h1>
      </header>
      <h2>{subtitle.toUpperCase()}</h2>
    </>
  );
}
