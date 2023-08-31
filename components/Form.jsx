import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex-start flex-col w-full max-w-full ">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        className="flex flex-col gap-7 mt-10 w-full max-w-2xl glassmorphism "
        onSubmit={handleSubmit}>
        {/* PROMPT */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            className="form_textarea"
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            value={post.prompt}
            required
            placeholder="Write your prompt here..."
          />
        </label>

        {/* TAG  */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>

          <input
            className="form_input"
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            value={post.tag}
            required
            placeholder="#tag"
          />
        </label>

        <div className="flex-end gap-4 mx-3 mb-5 ">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 rounded-full text-sm text-white bg-primary-orange "
            type="submit"
            disabled={submitting}>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
