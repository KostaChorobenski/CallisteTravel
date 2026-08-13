import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { ScrollToTop } from './components/layout/ScrollToTop'

const Home = lazy(() =>
    import('./pages/Home').then((module) => ({
        default: module.Home,
    })),
)

const Destinations = lazy(() =>
    import('./pages/Destinations').then((module) => ({
        default: module.Destinations,
    })),
)

const Destination = lazy(() =>
    import('./pages/Destination').then((module) => ({
        default: module.Destination,
    })),
)

const Journal = lazy(() =>
    import('./pages/Journal').then((module) => ({
        default: module.Journal,
    })),
)

const JournalEntry = lazy(() =>
    import('./pages/JournalEntry').then((module) => ({
        default: module.JournalEntry,
    })),
)

const About = lazy(() =>
    import('./pages/About').then((module) => ({
        default: module.About,
    })),
)

const Contact = lazy(() =>
    import('./pages/Contact').then((module) => ({
        default: module.Contact,
    })),
)

const NotFound = lazy(() =>
    import('./pages/NotFound').then((module) => ({
        default: module.NotFound,
    })),
)

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Suspense fallback={null}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />

                        <Route path="destinatsii" element={<Destinations />} />
                        <Route path="destinatsii/:id" element={<Destination />} />

                        <Route path="dnevnik" element={<Journal />} />
                        <Route path="dnevnik/:id" element={<JournalEntry />} />

                        <Route path="za-nas" element={<About />} />
                        <Route path="kontakt" element={<Contact />} />

                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App