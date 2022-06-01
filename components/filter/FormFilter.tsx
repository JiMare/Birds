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
        <div className="form-section">
          <h3 className="form-section__title">Barva:</h3>
          <div className="form-section__inputs form-section__inputs--checkbox">
            <div className="form-section__item form-section__item--checkbox">
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
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="black"
                id="black"
              />
              <label htmlFor="black">černá</label>
              <Image
                src="/icons/black.png"
                width={30}
                height={30}
                alt="black color"
              />
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="white"
                id="white"
              />
              <label htmlFor="white">bílá</label>
              <Image
                src="/icons/white.png"
                width={30}
                height={30}
                alt="white color"
              />
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="brown"
                id="brown"
              />
              <label htmlFor="brown">hnědá</label>
              <Image
                src="/icons/brown.png"
                width={30}
                height={30}
                alt="brown color"
              />
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="red"
                id="red"
              />
              <label htmlFor="red">červená</label>
              <Image
                src="/icons/red.png"
                width={30}
                height={30}
                alt="red color"
              />
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="yellow"
                id="yellow"
              />
              <label htmlFor="yellow">žlutá</label>
              <Image
                src="/icons/yellow.png"
                width={30}
                height={30}
                alt="yellow color"
              />
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="green"
                id="green"
              />
              <label htmlFor="green">zelená</label>
              <Image
                src="/icons/green.png"
                width={30}
                height={30}
                alt="green color"
              />
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="blue"
                id="blue"
              />
              <label htmlFor="blue">modrá</label>
              <Image
                src="/icons/blue.png"
                width={30}
                height={30}
                alt="blue color"
              />
            </div>
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
