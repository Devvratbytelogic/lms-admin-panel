import React from "react";
import { useSelector } from "react-redux";
import AddClass from "../../components/pages/Academics/modal/AddClass";

export default function Modal() {
    const { isOpen, componentName } = useSelector(
        (state) => state.allCommonModal
    );

    const renderComponent = () => {
        switch (componentName) {
            case "AddClass":
                return <AddClass />;

            default:
                return null;
        }
    };
    return <>{isOpen && renderComponent()}</>;
}