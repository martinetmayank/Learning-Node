const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => {
    return 'Notes.....'
}

const loadNotes = () => {
    try {
        const rawData = fs.readFileSync('notes.json')
        const dataJSON = rawData.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }

}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push(
            {
                title: title,
                body: body
            }
        )
        saveNotes(notes)
        console.log(chalk.green('New notes added!!'))
    }
    else {
        console.log(chalk.red('Note title already taken!'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green('Note Removed'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red('No Note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue('Your Notes'))
    notes.forEach((note) => {
        console.log(note.title)
    }
    )
}

const readNote = (title) => {
    const allNotes = loadNotes()
    const note = allNotes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(chalk.blue(note.body))
    }
    else {
        console.log(chalk.red('No Note Found!!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}