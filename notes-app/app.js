const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Adding a new Note.
yargs.command(
    {
        command: 'add',
        describe: 'Adds a new note.',
        builder:
        {
            title:
            {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            },
            body:
            {
                describe: 'Body of the Note.',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    }
)


// Removing a Note.
yargs.command(
    {
        command: 'remove',
        describe: 'Removes a  note.',
        builder:
        {
            title:
            {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.removeNote(argv.title)
        }
    }
)

// Listing all Notes.
yargs.command({
    command: 'list',
    describe: 'Lists titles of all Notes.',
    handler() {
        notes.listNotes()
    }
})

// Read a Note.
yargs.command({
    command: 'read',
    describe: 'Reades a note.',
    builder: {
        title: {
            describe: 'Note Title.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)