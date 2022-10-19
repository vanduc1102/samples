import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

import { database } from '../firebaseConfig'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import styles from '../../styles/EverNote.module.scss'
import 'react-quill/dist/quill.snow.css'

const DEFAULT_NOTE = {
    noteTitle: '',
    noteDesc: '',
}

export default function NoteDetails({ noteId }) {
    const [singleNote, setSingleNote] = useState({ ...DEFAULT_NOTE })
    const [isEdit, setIsEdit] = useState(false)

    const editNote = async (id) => {
        const docId = doc(database, 'notes', id)
        await updateDoc(docId, {
            noteTitle: singleNote.noteTitle,
            noteDesc: singleNote.noteDesc,
        })
        console.log('Updated note: ', singleNote)
    }

    const deleteNote = (id) => {
        const docId = doc(database, 'notes', id)
        deleteDoc(docId).then(() => {
            resetFields()
            console.log('Deleted note: ' + id)
            window.location.reload()
        })
    }

    const resetFields = () => {
        setSingleNote({ ...DEFAULT_NOTE })
    }

    const getSingleDoc = async (docId) => {
        if (docId) {
            const singleNote = doc(database, 'notes', noteId)
            const data = await getDoc(singleNote)
            setSingleNote({ ...data.data(), id: data.id })
        }
    }

    useEffect(() => {
        getSingleDoc(noteId)
    }, [noteId])

    return (
        <>
            {noteId && (
                <div>
                    <button
                        className={styles.editBtn}
                        onClick={() => setIsEdit(true)}
                    >
                        Edit
                    </button>
                    <button
                        className={styles.deleteBtn}
                        onClick={() => deleteNote(singleNote.id)}
                    >
                        Delete
                    </button>
                </div>
            )}

            {isEdit && (
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        placeholder="Enter the Title.."
                        onChange={(e) =>
                            setSingleNote({
                                ...singleNote,
                                noteTitle: e.target.value,
                            })
                        }
                        value={singleNote.noteTitle}
                    />
                    <div className={styles.ReactQuill}>
                        <ReactQuill
                            value={singleNote.noteDesc}
                            onChange={(value) =>
                                setSingleNote({
                                    ...singleNote,
                                    noteDesc: value,
                                })
                            }
                        />
                    </div>
                    <button
                        onClick={() => editNote(singleNote.id)}
                        className={styles.saveBtn}
                    >
                        Update Note
                    </button>
                </div>
            )}

            <h2>{singleNote.noteTitle}</h2>
            <div
                dangerouslySetInnerHTML={{ __html: singleNote.noteDesc }}
            ></div>
        </>
    )
}
