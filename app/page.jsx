"use client";
import CountButton from "./CountButton"
import Search from "./Search"
import './styles.css';

export default function Page() {
    return ( 
    <div>
    <h1>NextJS</h1>
    <CountButton id="small" ibkrnd="lightgray" nbkrnd="lightblue" />
    <CountButton id="bigger" ibkrnd="lightgray" nbkrnd="pink"  increment={2} />
    <p>
      <a href="https://github.com/stlrJ/next">GitHub Repo</a>
    </p>
    <hr></hr>
    <h2>Shop</h2>
    <Search />
    </div>
    )
  }
