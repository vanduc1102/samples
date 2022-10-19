import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { database } from '../firebaseConfig'
import styles from '../../styles/EverNote.module.scss'
import 'react-quill/dist/quill.snow.css'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const dbInstance = collection(database, 'notes')

export default function NoteOperations({ getSelectedNote }) {
    const [isInputVisible, setIsInputVisible] = useState(false)
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDesc, setNoteDesc] = useState('')
    const [loading, setLoading] = useState(false)
    const [notes, setNotes] = useState([])

    const inputToggle = () => {
        setIsInputVisible(!isInputVisible)
    }

    const saveNote = () => {
        if (!noteTitle) {
            return
        }

        setLoading(true)
        addDoc(dbInstance, {
            noteTitle: noteTitle,
            noteDesc: noteDesc,
        })
            .then(() => {
                setNoteTitle('')
                setNoteDesc('')
                getNotes()
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = () => {
        getDocs(dbInstance).then((data) => {
            setNotes(data.docs.map((item) => ({ ...item.data(), id: item.id })))
        })
    }

    return (
        <>
            <div className={styles.btnContainer}>
                <button className={styles.button} onClick={inputToggle}>
                    Add a new button
                </button>
            </div>
            {isInputVisible && (
                <>
                    <div className={styles.inputContainer}>
                        <input
                            placeholder="Enter the Title.."
                            className={styles.input}
                            value={noteTitle}
                            onChange={(event) =>
                                setNoteTitle(event.target.value)
                            }
                        />
                    </div>
                    <div className={styles.ReactQuill}>
                        <ReactQuill onChange={setNoteDesc} value={noteDesc} />
                    </div>
                    <div>
                        <button
                            className={styles.saveBtn}
                            onClick={saveNote}
                            disabled={loading}
                        >
                            Save Note
                        </button>
                    </div>
                </>
            )}

            <div className={styles.notesDisplay}>
                {notes.map((note) => {
                    return (
                        <div
                            key={note.id}
                            className={styles.notesInner}
                            onClick={() => getSelectedNote(note.id)}
                        >
                            <h4>{note.noteTitle}</h4>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
