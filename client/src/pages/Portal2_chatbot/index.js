import React from "react";
import { useTranslation } from "react-i18next";
import Landingcard from "../../shared/Landingcard";
import Pagina2 from "../prueba2";
import {Header,  Icon, IconGroup} from 'semantic-ui-react'
import Chatbot from "../../shared/Chatbot";

function Portal2_chatbot() {

  const [t, i18n] = useTranslation("global");
  
  return (
    
    <div>
      <Pagina2>

        <br></br>
        <Landingcard ></Landingcard>
        <br></br>
        <Header as='h6' content='' >
          <IconGroup size='large'>
            <Icon name='comment alternate outline' />
         
            {t("portal.t3")}
          </IconGroup>
        </Header>
        <Chatbot></Chatbot>

      </Pagina2>
      
    </div>

  );
}

export default Portal2_chatbot;
