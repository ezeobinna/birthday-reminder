import React from 'react';


const MessageList = () => {
    const lists = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Bertie Yates",
            age: "29 years",
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Hester Hogan",
            age: "32 years",
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Larry Little",
            age: "36 years",
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Sean Walsh",
            age: "34 years",
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Lola Gardne",
            age: "29 years",
        },
    ];

    const [text, setText] = React.useState(lists);
    const [title, setTitle] = React.useState("5 Birthdays Today");

    const ClearAll = () => {
        setText([]);
        setTitle("0 Birthdays Today");
    }


    return (
      <div className="realcontainer">
            <h4 className="title">{title}</h4>
        <div className="real">
          {text.map((list) => {
            const { img, name, age, id } = list;
            return (
              <div className="section" key={id}>
                <img src={img} alt="" className="image" />
                <div className="writeup">
                  <h3 className="name">{name}</h3>
                  <h4 className="age">{age}</h4>
                </div>
              </div>
            );
          })}
          <button type="button" className="btn" onClick={ClearAll}>
            Clear All
          </button>
        </div>
      </div>
    );

};


export default MessageList;
