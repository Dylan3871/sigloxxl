import React from "react";
import '../assets/css/Resultados.css'
import Navbar from "./Navbar";

export const ResultadosScreen = () => {
  //const puntuacion = 1000; // "Puntos"
 
  return (
    <div>
      <Navbar />
      <div class="div-1Resultados" >
        <div className="innerResultados">
          <div className="barraResultados">
            <h1>Resultados:</h1>
          </div>
          <div className="textoResultado">
          </div>

          {/*tabla  */}

    <div className="contenedor">
    <div className="table-responsive">
    <table>
      <thead>
        <tr>
          <th rowSpan="2">Encabezado 1</th>
          <th rowSpan="2">Ranjo de puntos</th> {/* Encabezado 4 en la posición del Encabezado 2 */}
          <th colSpan="2">Muestra estandarizada</th>
          <th colSpan="2">Muestra clinica</th>
        </tr>
        <tr>
          <th>Hombres</th>
          <th>Mujeres</th>
          <th>Hombres</th>
          <th>Mujeres</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INC</td>
        </tr>
        <tr>
          <td>Bajo</td>
          <td>55</td>
          <td>63</td>
          <td>63</td>
          <td>40</td>
          <td>48</td>
        </tr>
        <tr>
          <td>Moderado</td>
          <td>55-65</td>
          <td>31</td>
          <td>31</td>
          <td>52</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Alto</td>
          <td>65</td>
          <td>6</td>
          <td>6</td>
          <td>8</td>
          <td>2</td>
        </tr>

        <tr>
          <td>CNV</td>
        </tr>
        <tr>
          <td>Bajo</td>
          <td>45</td>
          <td>27</td>
          <td>26</td>
          <td>84</td>
          <td>84</td>
        </tr>
        <tr>
          <td>Moderado</td>
          <td>45-55</td>
          <td>47</td>
          <td>45</td>
          <td>14</td>
          <td>16</td>
        </tr>
        <tr>
          <td>Alto</td>
          <td>60</td>
          <td>27</td>
          <td>28</td>
          <td>2</td>
          <td>0</td>
        </tr>

        <tr>
          <td>GDS</td>
        </tr>
        <tr>
          <td>Bajo</td>
          <td>50</td>
          <td>49</td>
          <td>47</td>
          <td>2</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Moderado</td>
          <td>50-60</td>
          <td>35</td>
          <td>40</td>
          <td>28</td>
          <td>24</td>
        </tr>
        <tr>
          <td>Alto</td>
          <td>60</td>
          <td>16</td>
          <td>14</td>
          <td>70</td>
          <td>76</td>
        </tr>
        <tr>
          <td>AFC</td>
        </tr>
        <tr>
          <td>Bajo</td>
          <td>50</td>
          <td>52</td>
          <td>52</td>
          <td>10</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Moderado</td>
          <td>50-60</td>
          <td>33</td>
          <td>35</td>
          <td>34</td>
          <td>38</td>
        </tr>
        <tr>
          <td>Alto</td>
          <td>60</td>
          <td>15</td>
          <td>14</td>
          <td>56</td>
          <td>58</td>
        </tr>

        <tr>
          <td>PCS</td>
        </tr>
        <tr>
          <td>Bajo</td>
          <td>50</td>
          <td>48</td>
          <td>51</td>
          <td>4</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Moderado</td>
          <td>50-60</td>
          <td>37</td>
          <td>34</td>
          <td>36</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Alto</td>
          <td>60</td>
          <td>15</td>
          <td>15</td>
          <td>60</td>
          <td>74</td>
        </tr>

        <tr>
          <td>AGG</td>
        </tr>
        <tr>
          <td>Bajo</td>
          <td>50</td>
          <td>53</td>
          <td>54</td>
          <td>34</td>
          <td>22</td>
        </tr>
        <tr>
          <td>Moderado</td>
          <td>50-60</td>
          <td>32</td>
          <td>30</td>
          <td>29</td>
          <td>36</td>
        </tr>
        <tr>
          <td>Alto</td>
          <td>60</td>
          <td>13</td>
          <td>18</td>
          <td>52</td>
          <td>62</td>
        </tr>

        <tr>
          <td>TTO</td>
        </tr>
        <tr>
          <td>Bajo</td>
          <td>50</td>
          <td>45</td>
          <td>45</td>
          <td>9</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Moderado</td>
          <td>50-60</td>
          <td>43</td>
          <td>38</td>
          <td>39</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Alto</td>
          <td>60</td>
          <td>13</td>
          <td>18</td>
          <td>52</td>
          <td>62</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>

        {/*tabla1  */}
        
      <div className="contenedor1">
      <table>
  <thead>
    <tr>
      <th>Numero de reactivo</th>
      <th>Codigo de respuesta</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>V</td>
    </tr>
    <tr>
      <td>2</td>
      <td>V</td>
    </tr>
    <tr>
      <td>3</td>
      <td>F</td>
    </tr>
    <tr>
      <td>4</td>
      <td>V</td>
    </tr>
    <tr>
      <td>5</td>
      <td>F</td>
    </tr>
    <tr>
      <td>6</td>
      <td>F</td>
    </tr>
    <tr>
      <td>7</td>
      <td>F</td>
    </tr>
    <tr>
      <td>8</td>
      <td>V</td>
    </tr>
    <tr>
      <td>9</td>
      <td>F</td>
    </tr>
    <tr>
      <td>10</td>
      <td>F</td>
    </tr>
    <tr>
      <td>11</td>
      <td>V</td>
    </tr>
    <tr>
      <td>12</td>
      <td>F</td>
    </tr>
    <tr>
      <td>13</td>
      <td>V</td>
    </tr>
    <tr>
      <td>14</td>
      <td>F</td>
    </tr>
    <tr>
      <td>15</td>
      <td>F</td>
    </tr>
    <tr>
      <td>16</td>
      <td>V</td>
    </tr>
    <tr>
      <td>17</td>
      <td>F</td>
    </tr>
    <tr>
      <td>18</td>
      <td>V</td>
    </tr>
    <tr>
      <td>19</td>
      <td>V</td>
    </tr>
    <tr>
      <td>20</td>
      <td>F</td>
    </tr>
  </tbody>
</table>

    </div>


        </div>
      </div>
      </div>
      
     
     

      

      
  );
};
