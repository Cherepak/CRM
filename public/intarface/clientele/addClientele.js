import React from "react";
import ReactDOM from "react-dom";

export function AddClientele (props) {
  const {userName} = props.props.props.props.props.props.state;
  const noSubmit = props.props.props.props.props.props.noSubmit;
  const componentAddClientToServer = props.props.props.props.props.props.componentAddClientToServer;
  return <form onSubmit={noSubmit}>
    <ul className="form-employee__list">
      <li>
        <input className="form-employee__input input"
        type="text"
        id="namecorp"
        name="namecorp" placeholder="Название организации"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="text"
        id="family"
        name="family" placeholder="Фамилия"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="text"
        id="name"
        name="name" placeholder="Имя"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="text"
        id="sourname"
        name="sourname" placeholder="Отчество"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="text"
        id="mail"
        name="mail" placeholder="Эл.почта"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="number"
        id="phone"
        name="phone" placeholder="телефон"/>
      </li>
      <li>
        <p className="center">Лицо:</p>
        <select id="face">
          <option value="физическое">физическое</option>
          <option value="юридическое">юридическое</option>
        </select>
      </li>
      <li>
        <input className="form-employee__input input"
        type="number"
        id="inn"
        name="inn" placeholder="ИНН"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="number"
        id="ogrn"
        name="ogrn" placeholder="ОГРН"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="text"
        id="bank"
        name="bank" placeholder="Банк"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="number"
        id="kpp"
        name="kpp" placeholder="КПП"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="number"
        id="okpo"
        name="okpo" placeholder="ОКПО"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="number"
        id="raschSch"
        name="raschSch" placeholder="Расчетный счет"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="text"
        id="factip"
        name="factip" placeholder="Фактический адрес"/>
      </li>
      <li>
        <input className="form-employee__input input"
        type="text"
        id="jurip"
        name="jurip" placeholder="Юридический адрес"/>
      </li>
      
    </ul>
    <button onClick={()=>{
      componentAddClientToServer($("#family").val(),$("#name").val(),$("#sourname").val(),$("#mail").val(),$("#phone").val(),$("#face").val(),$("#inn").val(),$("#ogrn").val(),$("#bank").val(),$("#kpp").val(),$("#okpo").val(),$("#raschSch").val(),$("#namecorp").val(),$("#factip").val(),$("#jurip").val())
    }}>Добавить</button>
  </form>
}
