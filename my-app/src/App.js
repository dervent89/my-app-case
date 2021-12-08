import React, { useState } from 'react'

import Header from './Components/Header'
import Footer from './Components/Footer'
import GenerateSlogan from './Components/GenerateSlogan'
import Features from './Components/Features'
import Products from './Components/Products'
import Button from './Components/Button';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData]= useState([]);
  //const [paginations, pushArr]= useState([]);
  const [activePage, changeActive] = useState(1);
  const [totalPage, changeTotal] = useState(0);
  const [totalData, changeTotalData] = useState(0);
  const perView = 18;
  const [offset, changeOffset] = useState({start:0, end: perView});

  const runCallback = (cb) => {
    return cb();
  };

  const changePage = (page) => {
    var newPage = activePage;
    if(page === 'next'){
      newPage++;
    }else if(page === 'prev'){
      newPage--;
    }else{
      newPage = !isNaN(page)?page:page.target.attributes['data-page'].value;
    }
    changeActive(newPage--)
    var newOffset = {
      start: (perView * newPage),
      end: (perView * newPage) + perView
    };
    changeOffset(newOffset);
    
  };

  const copyText = (el) => {
    let copyText = el.target.innerText;
    navigator.clipboard.writeText(copyText)
    el.target.classList.add('copied')
    setTimeout(()=>{
      el.target.classList.remove('copied')
    },600)
  };
  const removeItem = (index) => {
    if(window.confirm(`"${data[index].text}"\n Are you sure you want to delete this slogan?`)){
      setData(data.filter((item,i) => index !== i));
      let newTotal = totalData - 1;
      changeTotalData(newTotal);
      let page = Math.ceil(newTotal / perView);
      changeTotal(page);
      if(activePage > page){
        let active = activePage - 1;
        changeActive(active);
        changePage(active)
      }
    };
  };

  const resetData = () => {
    setData([]);
    changeActive(1);
    changeTotal(0);
    changeTotalData(0);
    changeOffset({start: 0, end: perView});
  };

  const removeAll = () => {
    if(window.confirm(`Are you sure you want to delete all slogan?`)){
      resetData();
    }
  };

  const getData=(value)=>{
    if(value === ''){
      resetData();
      return false;
    }
    fetch('data.json',{ headers : {'Content-Type': 'application/json','Accept': 'application/json'}})
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      setInputValue(value)
      const filteredData = myJson.filter(filterItem => filterItem.text.toLowerCase().indexOf(value.toLowerCase()) > -1)
      const page = Math.ceil(filteredData.length / perView);
      changeTotal(page)
      changeTotalData(filteredData.length);
      setData(filteredData);
    });

  }
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="page">
          <div className="page-inner">

            <div className="page-head">
              <h1 className="page-head-title">Free slogan maker</h1>
              <p className="page-head-desc">Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
            </div>

            <GenerateSlogan onChangeInput={setInputValue} onFilter={getData}/>
            
            { totalData && totalData > 0 ? (
            <div className="slogan_result">
              <div className="slogan_result-head">
                <h5 className="slogan_result-head-title">We have generated {totalData} slogans for “{inputValue}”</h5>
                <Button variant="border-blue" text="Download all"/>
              </div>
              <div className="slogan_result-body">
                <button type="button" className="removeAll" onClick={removeAll}>Remove All</button>
                <ul className="slogan-list">
                  {
                    data.map((item, index)=>index >= offset.start && index < offset.end?
                    <li
                      className="slogan-list-item"
                      key={index}
                    > 
                      <span
                        data-copy="Click to copy"
                        data-copied="Copied!"
                        onClick={copyText.bind(this)}
                      >{item.text}</span>
                      <div
                        className="removeItem"
                        onClick={ () => removeItem(index)}
                      >x</div>
                    </li>:'')
                  }
                </ul>
              </div>
              <div className="slogan_result-footer">
                <div className="pagination">
                  <div className="pagination-button">
                    <div className={`button prev ${activePage <= 1 ? 'hide':''}`} onClick={() => changePage('prev')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
                        <path d="M5.377,9.292a.711.711,0,0,0,.069-.925l-.069-.08L2.091,5,5.377,1.713A.711.711,0,0,0,5.446.788L5.377.708A.711.711,0,0,0,4.452.639l-.08.069L.583,4.5a.711.711,0,0,0-.069.925l.069.08L4.373,9.292A.711.711,0,0,0,5.377,9.292Z" transform="translate(-0.375 -0.5)" fill="#146eb4"/>
                      </svg>
                      <span>Prev</span>
                    </div>
                  </div>
                  <ul className="pagination-list">
                    {
                      runCallback(() => {
                        const paging = [];
                        for (var p = 1; p <= totalPage; p++) {
                          paging.push(<li className={`pagination-list-item ${activePage === p ? 'active':''}`} key={p} onClick={(e) => changePage(e)} data-page={p}>{p}</li>);
                        }
                        return paging;
                      })
                    }
                    {/* {paginations.map(p => <li className={`pagination-list-item ${activePage === p ? 'active':''}`} key={p} onClick={() => changePage(p)}>{p}</li>)} */}
                  </ul>
                  <div className="pagination-button">
                    <div className={`button next ${activePage === totalPage ? 'hide':''}`} onClick={() => changePage('next')}>
                      <span>Next</span>
                      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.583108 9.29189C0.330856 9.03964 0.307924 8.6449 0.514312 8.36675L0.583108 8.28706L3.86984 5L0.583108 1.71294C0.330855 1.46069 0.307923 1.06596 0.514312 0.787799L0.583108 0.708109C0.83536 0.455856 1.23009 0.432923 1.50825 0.639312L1.58794 0.708109L5.37742 4.49758C5.62967 4.74983 5.6526 5.14457 5.44621 5.42273L5.37742 5.50242L1.58794 9.29189C1.31047 9.56937 0.860586 9.56937 0.583108 9.29189Z" fill="#146EB4"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ):('')}
          </div>
        </div>
      </div>
      <Features/>
      <Products/>
      <Footer/>
    </div>
  );
}