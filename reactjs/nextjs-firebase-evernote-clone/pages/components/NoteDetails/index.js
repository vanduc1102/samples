import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Button, Card, Input, message, Divider, Typography } from 'antd'

import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

import { database } from '../../firebaseConfig'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import styles from './index.module.scss'
import 'react-quill/dist/quill.snow.css'

const DEFAULT_NOTE = {
    noteTitle: '',
    noteDesc: '',
}

export default function NoteDetails({ noteId }) {
    const [singleNote, setSingleNote] = useState({ ...DEFAULT_NOTE })
    const [isEdit, setIsEdit] = useState(false)
    const [loading, setLoading] = useState(false)

    const editNote = async (id) => {
        setLoading(true)
        const docId = doc(database, 'notes', id)
        updateDoc(docId, {
            noteTitle: singleNote.noteTitle,
            noteDesc: singleNote.noteDesc,
        })
            .then(() => {
                message.info('Updated note: ' + id)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const deleteNote = (id) => {
        const docId = doc(database, 'notes', id)
        deleteDoc(docId).then(() => {
            resetFields()
            message.info('Deleted note: ' + id)
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
                <div className={styles.buttonContainer}>
                    <Button type="primary" onClick={() => setIsEdit(true)}>
                        Edit
                    </Button>
                    <Button
                        type="primary"
                        danger={true}
                        onClick={() => deleteNote(singleNote.id)}
                    >
                        Delete
                    </Button>
                </div>
            )}

            {isEdit && (
                <Card
                    actions={[
                        <Button
                            type="primary"
                            onClick={() => editNote(singleNote.id)}
                            loading={loading}
                        >
                            Update Note
                        </Button>,
                    ]}
                >
                    <Input
                        placeholder="Enter the Title.."
                        onChange={(e) =>
                            setSingleNote({
                                ...singleNote,
                                noteTitle: e.target.value,
                            })
                        }
                        value={singleNote.noteTitle}
                    />
                    <Divider />
                    <ReactQuill
                        value={singleNote.noteDesc}
                        onChange={(value) =>
                            setSingleNote({
                                ...singleNote,
                                noteDesc: value,
                            })
                        }
                    />
                </Card>
            )}

            {noteId && (
                <Card
                    size="small"
                    title={
                        <Typography.Title>
                            {singleNote.noteTitle}
                        </Typography.Title>
                    }
                    style={{ width: 300, margin: '1rem' }}
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html: singleNote.noteDesc,
                        }}
                    ></div>
                </Card>
            )}
        </>
    )
}
