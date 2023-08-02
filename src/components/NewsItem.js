import React from "react";

const NewsItem =(props)=>{
    const { title, description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card" >
        <div style={{display:'flex',
        justifyContent:'flex-end',
        position:'absolute',
        right:'0'

        }}>
        <span className="badge rounded-pill bg-danger">
  {source}
  </span>
  </div>
          <img
            src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/07/26/1600x900/rocky_aur_rani_kii_prem_kahaani_1688460142919_1690360758093.jpg":imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}
</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
