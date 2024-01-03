import styles from "../Notes.module.css";

async function getNote(noteID: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteID}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Notes/{note.id}</h1>
      <div className={styles.note}>
        <h2 className={styles.title}>{note.tittle}</h2>
        <h5 className={styles.content}>{note.content}</h5>
        <p className={styles.created}>{note.created}</p>
      </div>
    </div>
  );
}
