"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation";
import menu_data from "../../../data/MenuData";

const NavMenuTwo = ({ num = false }) => {
    const currentRoute = usePathname();

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
    };

    return (
        <ul className="navigation">
            {menu_data.filter((item: any) => item.page === "header_2").map((menu: any) => (
                <li key={menu.id}
                    className={menu.has_dropdown ? "menu-item-has-children" : ""}
                >
                    <Link href={menu.link}
                        className={`section-link ${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m: any) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active-2" : ""}`}>
                        {num && menu.id <= 9
                            ? `0${menu.id}.`
                            : num && `${menu.id}.`}
                        {menu.title}
                    </Link>

                    {menu.has_dropdown && (
                        <>
                            {menu.sub_menus && (
                                <ul className="sub-menu">
                                    {menu.sub_menus.map((sub_m: any, i: any) => (
                                        <li key={i} className={`dropdown_item-${sub_m.class_name}`}>
                                            <Link
                                                href={sub_m.link}
                                                className={
                                                    sub_m.link && isSubMenuItemActive(sub_m.link) ? "active-2" : ""}>
                                                {sub_m.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenuTwo;