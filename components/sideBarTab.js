export default function SideBarTab({ id, title, selectedItem }) {
    return (
        selectedItem === id && (
        <div className=".bg-black w-20">
            <span className=".bg-black">{title}</span>
        </div>
        )
    );
}