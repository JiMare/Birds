import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { clearFilter, setFilter } from "../../actions/filterActions";
import { BirdHeight } from "../../model/enums/BirdHeight";
import Image from "next/image";

type FormValues = {
  height: BirdHeight;
  colours: string[];
  feed: string[];
};

const FormFilter = (): ReactElement => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setFilter({ ...data, isActive: true });
    console.log("submit", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section">
          <h3 className="form-section__title">Velikost:</h3>
          <div className="form-section__inputs">
            <div className="form-section__row">
              <div className="form-section__item">
                <input
                  {...register("height")}
                  type="radio"
                  value={BirdHeight.TINY}
                  id="tiny"
                />
                <label htmlFor="tiny">
                  <Image
                    src="/icons/tiny.png"
                    width={50}
                    height={50}
                    alt="tiny bird"
                  />
                </label>
              </div>
              <div className="form-section__item">
                <input
                  {...register("height")}
                  type="radio"
                  value={BirdHeight.SMALL}
                  id="small"
                />
                <label htmlFor="small">
                  <Image
                    src="/icons/small.png"
                    width={50}
                    height={50}
                    alt="small bird"
                  />
                </label>
              </div>
            </div>
            <div className="form-section__row">
              <div className="form-section__item">
                <input
                  {...register("height")}
                  type="radio"
                  value={BirdHeight.MIDDLE}
                  id="medium"
                />
                <label htmlFor="medium">
                  <Image
                    src="/icons/medium.png"
                    width={50}
                    height={50}
                    alt="medium bird"
                  />
                </label>
              </div>
              <div className="form-section__item">
                <input
                  {...register("height")}
                  type="radio"
                  value={BirdHeight.LARGE}
                  id="large"
                />
                <label htmlFor="large">
                  <Image
                    src="/icons/large.png"
                    width={50}
                    height={50}
                    alt="large bird"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3 className="form-section__title">Barva:</h3>
          <div className="form-section__checkbox">
            <input
              {...register("colours")}
              type="checkbox"
              value="grey"
              id="grey"
            />
            <label htmlFor="grey">šedá</label>
            <Image
              src="/icons/grey.png"
              width={30}
              height={30}
              alt="grey color"
            />
          </div>
          <div className="form-section__checkbox">
            <input
              {...register("colours")}
              type="checkbox"
              value="black"
              id="black"
            />
            <label htmlFor="black">černá</label>
          </div>
          <div className="form-section__checkbox">
            <input
              {...register("colours")}
              type="checkbox"
              value="white"
              id="white"
            />
            <label htmlFor="white">bílá</label>
          </div>
          <div className="form-section__checkbox">
            <input
              {...register("colours")}
              type="checkbox"
              value="brown"
              id="brown"
            />
            <label htmlFor="brown">hnědá</label>
          </div>
          <div className="form-section__checkbox">
            <input
              {...register("colours")}
              type="checkbox"
              value="red"
              id="red"
            />
            <label htmlFor="red">červená</label>
          </div>
          <div className="form-section__checkbox">
            <input
              {...register("colours")}
              type="checkbox"
              value="yellow"
              id="yellow"
            />
            <label htmlFor="yellow">žlutá</label>
          </div>
          <div className="form-section__checkbox">
            <input
              {...register("colours")}
              type="checkbox"
              value="green"
              id="green"
            />
            <label htmlFor="green">zelená</label>
          </div>
          <div className="form-section__checkbox">
            <input
              {...register("colours")}
              type="checkbox"
              value="blue"
              id="blue"
            />
            <label htmlFor="blue">modrá</label>
          </div>
        </div>
        <div className="form-section">
          <h3 className="form-section__title">Krmení:</h3>
          <div className="form-section__checkbox">
            <input {...register("feed")} type="checkbox" value="seeds" />
            <label>semínka</label>
          </div>
          <div className="form-section__checkbox">
            <input {...register("feed")} type="checkbox" value="plants" />
            <label>rostliny</label>
          </div>
          <div className="form-section__checkbox">
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
