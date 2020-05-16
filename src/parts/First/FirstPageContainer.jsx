import React from "react";
import FirstPage from "./FirstPage";
import {connect} from "react-redux";
import {setNewPageSelected, setNewPortion} from "../../Redux/FirstPageReducer";
import {getFirstPageItems, getPagesCount, getPageSelected} from "../../common/selectors";

const FirstPageContainer = (props) => {

    let portionsCount = Math.ceil(props.pagesCount / props.pagePortionCount);
    let startOfPortion = (props.pagePortion - 1) * props.pagePortionCount;
    let paginatorArray = [];
    for (let i = startOfPortion; i <= startOfPortion + props.pagePortionCount; i++) {
        if (i > 0 && i < props.pagesCount) paginatorArray.push(i)
    }

    let portionChange = (e) => {
        props.setNewPortion(e)
    }

    let pageChanger = (num) => {
        props.setNewPageSelected(num);
    };


    return (<>
        <FirstPage portionChange={portionChange} pageSelected={props.pageSelected} items={props.items}
                   paginatorArray={paginatorArray} pageChanger={pageChanger} portionsCount={portionsCount}
                   pagePortion={props.pagePortion}/>
    </>)
};

let mapStateToProps = (state) => {
    return {
        items: getFirstPageItems(state),
        pageSelected: getPageSelected(state),
        pagesCount: getPagesCount(state),
        pagePortion: state.firstPage.pagePortion,
        pagePortionCount: state.firstPage.pagePortionCount
    }
};

const ConnectedFirstPageContainer = connect(mapStateToProps, {
    setNewPageSelected,
    setNewPortion
})(FirstPageContainer);

export default ConnectedFirstPageContainer