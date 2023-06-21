import { useRef } from "react";
import { useGlobalContext } from "./Context";
import sublinks from "./data";


const Submenu = () => {
    const { pageId, setPageId } = useGlobalContext();
    const currentPage = sublinks.find(item => item.pageId === pageId);
    const submenuContainer = useRef(null);
    const handleMouseLeave = event => {
        const submenu = submenuContainer.current;
        // properties of element - dimensions
        const { left, right, bottom } = submenu.getBoundingClientRect();
        // coordinates of cursor
        const { clientX, clientY } = event;
        if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
            setPageId(null);
        }
    }
    return (
        <div className={currentPage ? "submenu show-submenu" : "submenu"} onMouseLeave={handleMouseLeave}
            ref={submenuContainer}>
            <h5>{currentPage?.page}</h5>
            <div className="submenu-links" style={{ gridTemplateColumns: currentPage?.links?.length > 2 ? "1fr 1fr" : "1fr" }}>
                {currentPage?.links?.map(link => {
                    const { id, url, icon, label } = link;
                    return <a key={id} href={url}>{icon}{label}</a>
                })}
            </div >
        </div >
    )
}
export default Submenu


