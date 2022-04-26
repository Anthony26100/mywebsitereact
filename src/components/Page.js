const Page = ({page, nextPage}) =>{
    return(
        <nav aria-label="Page navigation example ">
            <ul className="pagination justify-content-center mt-2">
                <li className="page-item">
                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true" onClick={() => nextPage(page-1)}>Previous</a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">{page}</a></li>
                <li className="page-item"><a className="page-link" href="#">{page+1}</a></li>
                <li className="page-item"><a className="page-link" href="#">{page+2}</a></li>
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => nextPage(page+1)}>Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Page