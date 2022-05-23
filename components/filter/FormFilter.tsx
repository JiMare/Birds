import React from "react";
import { useForm } from "react-hook-form";
import { clearFilter, setFilter } from "../../actions/filterActions";
import { BirdHeight } from "../../model/enums/BirdHeight";

type FormValues = {
  height: BirdHeight;
  colours: string[];
  feed: string[];
};

const FormFilter = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setFilter({ ...data, isActive: true });
    console.log("submit", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__section">
          Velikost:
          <div>
            <input
              {...register("height")}
              type="radio"
              value={BirdHeight.TINY}
            />
            <label>XS</label>
          </div>
          <div>
            <input
              {...register("height")}
              type="radio"
              value={BirdHeight.SMALL}
            />
            <label>S</label>
          </div>
          <div>
            <input
              {...register("height")}
              type="radio"
              value={BirdHeight.MIDDLE}
            />
            <label>M</label>
          </div>
          <div>
            <input
              {...register("height")}
              type="radio"
              value={BirdHeight.LARGE}
            />
            <label>L</label>
          </div>
        </div>
        <div className="form__section">
          Barva:
          <div>
            <input {...register("colours")} type="checkbox" value="grey" />
            <label>šedá</label>
          </div>
          <div>
            <input {...register("colours")} type="checkbox" value="black" />
            <label>černá</label>
          </div>
          <div>
            <input {...register("colours")} type="checkbox" value="white" />
            <label>bílá</label>
          </div>
          <div>
            <input {...register("colours")} type="checkbox" value="brown" />
            <label>hnědá</label>
          </div>
          <div>
            <input {...register("colours")} type="checkbox" value="red" />
            <label>červená</label>
          </div>
          <div>
            <input {...register("colours")} type="checkbox" value="yellow" />
            <label>žlutá</label>
          </div>
          <div>
            <input {...register("colours")} type="checkbox" value="green" />
            <label>zelená</label>
          </div>
          <div>
            <input {...register("colours")} type="checkbox" value="blue" />
            <label>modrá</label>
          </div>
        </div>
        <div className="form__section">
          Krmení:
          <div>
            <input {...register("feed")} type="checkbox" value="seeds" />
            <label>semínka</label>
          </div>
          <div>
            <input {...register("feed")} type="checkbox" value="plants" />
            <label>rostliny</label>
          </div>
          <div>
            <input {...register("feed")} type="checkbox" value="fruits" />
            <label>ovoce</label>
          </div>
        </div>
        <button type="submit" className="button">
          Vyfiltrovat
        </button>
      </form>
      <button onClick={clearFilter} className="button">
        Resetovat
      </button>
    </>
  );
};

export default FormFilter;
