import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Button, List, Typography, Input, Divider } from 'antd'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { database } from '../../firebaseConfig'

import styles from './index.module.scss'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
const dbInstance = collection(database, 'notes')

export default function NoteOperations({ getSelectedNote }) {
    const [isInputVisible, setIsInputVisible] = useState(false)
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDesc, setNoteDesc] = useState('')
    const [loading, setLoading] = useState(false)
    const [loadingNotes, setLoadingNotes] = useState(false)
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
                message.info('Added new note')
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
        setLoadingNotes(true)
        getDocs(dbInstance)
            .then((data) => {
                setNotes(
                    data.docs.map((item) => ({ ...item.data(), id: item.id })),
                )
            })
            .finally(() => {
                setLoadingNotes(false)
            })
    }

    return (
        <div className={styles.Container}>
            <div className={styles.btnContainer}>
                <Button type="primary" onClick={inputToggle} disabled={loading}>
                    Add a new button
                </Button>
            </div>

            {isInputVisible && (
                <div className={styles.noteFormContainer}>
                    <div>
                        <Input
                            placeholder="Enter the Title.."
                            value={noteTitle}
                            onChange={(event) =>
                                setNoteTitle(event.target.value)
                            }
                        />
                    </div>
                    <Divider />
                    <div>
                        <ReactQuill onChange={setNoteDesc} value={noteDesc} />
                    </div>
                    <Divider />
                    <div>
                        <Button
                            type="primary"
                            onClick={saveNote}
                            loading={loading}
                        >
                            Save Note
                        </Button>
                    </div>
                </div>
            )}
            <div>
                <List
                    bordered
                    dataSource={notes}
                    loading={loadingNotes}
                    renderItem={(item) => (
                        <List.Item
                            onClick={() => getSelectedNote(item.id)}
                            key={item.id}
                        >
                            <Typography.Text>{item.noteTitle}</Typography.Text>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}
