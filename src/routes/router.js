import SortedCategoryPage from "../pages/SortedCategory/SortedCategoryPage";

export const router = [
    {path: '/', component: SortedCategoryPage},
    {path: '/group/:id', component: SortedCategoryPage},
    {path: '/teacher/:id', component: SortedCategoryPage},
]