import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { clearFilter, setFilter } from "../../actions/filterActions";
import { BirdHeight } from "../../model/enums/BirdHeight";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type FormValues = {
  height: BirdHeight;
  colours: string[];
  feed: string[];
};

const FormFilter = (): ReactElement => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setFilter({ ...data, isActive: true });
    console.log("submit", data);
    router.push("/catalogue");
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
                className="input"
              />
              <label htmlFor="tiny" className="label">
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
                className="input"
              />
              <label htmlFor="small" className="label">
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
                className="input"
              />
              <label htmlFor="medium" className="label">
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
                className="input"
              />
              <label htmlFor="large" className="label">
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
                className="input"
              />
              <label htmlFor="grey" className="label">
                <p>šedá</p>
                <Image
                  src="/icons/grey.png"
                  width={30}
                  height={30}
                  alt="grey color"
                />
              </label>
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="black"
                id="black"
                className="input"
              />
              <label htmlFor="black" className="label">
                <p>černá</p>
                <Image
                  src="/icons/black.png"
                  width={30}
                  height={30}
                  alt="black color"
                />
              </label>
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="white"
                id="white"
                className="input"
              />
              <label htmlFor="white" className="label">
                <p>bílá</p>
                <Image
                  src="/icons/white.png"
                  width={30}
                  height={30}
                  alt="white color"
                />
              </label>
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="brown"
                id="brown"
                className="input"
              />
              <label htmlFor="brown" className="label">
                <p>hnědá</p>
                <Image
                  src="/icons/brown.png"
                  width={30}
                  height={30}
                  alt="brown color"
                />
              </label>
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="red"
                id="red"
                className="input"
              />
              <label htmlFor="red" className="label">
                <p>červená</p>
                <Image
                  src="/icons/red.png"
                  width={30}
                  height={30}
                  alt="red color"
                />
              </label>
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="yellow"
                id="yellow"
                className="input"
              />
              <label htmlFor="yellow" className="label">
                <p>žlutá</p>
                <Image
                  src="/icons/yellow.png"
                  width={30}
                  height={30}
                  alt="yellow color"
                />
              </label>
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="green"
                id="green"
                className="input"
              />
              <label htmlFor="green" className="label">
                <p>zelená</p>
                <Image
                  src="/icons/green.png"
                  width={30}
                  height={30}
                  alt="green color"
                />
              </label>
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("colours")}
                type="checkbox"
                value="blue"
                id="blue"
                className="input"
              />
              <label htmlFor="blue" className="label">
                <p>modrá</p>
                <Image
                  src="/icons/blue.png"
                  width={30}
                  height={30}
                  alt="blue color"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3 className="form-section__title">Krmení:</h3>
          <div className="form-section__inputs form-section__inputs--checkbox">
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("feed")}
                type="checkbox"
                value="seeds"
                className="input"
                id="seeds"
              />
              <label htmlFor="seeds" className="label">
                <p>semínka</p>
                <Image
                  src="/images/img-feed/seeds.jpg"
                  width={30}
                  height={30}
                  alt="seeds"
                  className="feed-card__image"
                />
              </label>
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("feed")}
                type="checkbox"
                value="meat"
                className="input"
                id="meat"
              />
              <label htmlFor="meat" className="label">
                <p>maso</p>
                <Image
                  src="/images/img-feed/meat.jpg"
                  width={30}
                  height={30}
                  alt="meat"
                  className="feed-card__image"
                />
              </label>
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("feed")}
                type="checkbox"
                value="fruits"
                className="input"
                id="fruit"
              />
              <label htmlFor="fruit" className="label">
                <p>ovoce</p>
                <Image
                  src="/images/img-feed/fruit.jpg"
                  width={30}
                  height={30}
                  alt="fruit"
                  className="feed-card__image"
                />
              </label>
            </div>
            <div className="form-section__item form-section__item--checkbox">
              <input
                {...register("feed")}
                type="checkbox"
                value="tallow"
                className="input"
                id="tallow"
              />
              <label htmlFor="tallow" className="label">
                <p>tuk</p>
                <Image
                  src="/images/img-feed/tallow.jpg"
                  width={30}
                  height={30}
                  alt="tallow"
                  className="feed-card__image"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <button type="submit" className="button button--form">
            Vyfiltrovat
          </button>

          <Link href="/catalogue" passHref>
            <button onClick={clearFilter} className="button button--form">
              Resetovat
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormFilter;
