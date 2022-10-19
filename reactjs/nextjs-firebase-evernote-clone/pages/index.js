import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/EverNote.module.scss'
import NoteOperations from './components/NodeOperations'
import NoteDetails from './components/NoteDetails'

export default function Home() {
    const [selectedNoteId, setSelectedNoteId] = useState()

    const getSelectedNote = (noteId) => {
        setSelectedNoteId(noteId)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>EverNote Clone</title>
                <meta name="description" content="This is an EverNote Clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <NoteOperations getSelectedNote={getSelectedNote} />
                    </div>
                    <div className={styles.right}>
                        <NoteDetails noteId={selectedNoteId}></NoteDetails>
                    </div>
                </div>
            </main>
        </div>
    )
}
