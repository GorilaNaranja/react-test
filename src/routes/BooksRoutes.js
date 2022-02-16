import { Switch, Route } from 'react-router-dom';
import Books from '../components/Books/Books';
import BookEditor from '../components/Books/BookEditor';
import BookDetail from '../components/Books/BookDetail';

function BooksRoutes() {
    return (
        <Switch>
            <Route exact path='/books'>
                <Books />
            </Route>
            <Route exact path='/books/create'>
                <BookEditor title="Create book" />
            </Route>
            <Route exact path='/books/:_id/edit'>
                <BookEditor title="Edit book" />
            </Route>
            <Route path='/books/:_id'>
                <BookDetail />
            </Route>
        </Switch>
    )
}

export default BooksRoutes;