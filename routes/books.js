const Book = require('../models/Book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.get('/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
}); 
 

router.post('/', async (req, res) => {
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        publishedDate: req.body.publishedDate,
    };
    await newBook.save();
    res.status(201).json(newBook);
});
router.put('/:id', async (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');

    book.title = req.body.title,
    book.author = req.body.author,
    book.publisher = req.body.publisher,
    book.publishedDate = req.body.publishedDate,
    await book.save();
    res.json(book);
});

router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndRemove(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
});
