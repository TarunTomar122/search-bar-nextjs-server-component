import { redirect } from 'next/navigation'
import BooksList from '@/components/booksList';

export default async function page({ searchParams }: { searchParams: { searchTerm: string } }) {

  async function handleSubmit(formData: any) {
    "use server";
    redirect(`?searchTerm=${formData.get('searchTerm')}`);
  };

  return (

    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 pt-20 text-center">

      <form className="flex flex-row gap-8 w-full items-center justify-center mb-24" action={handleSubmit}>
        <input
          className="w-1/2 p-4 text-xl text-cyan-800"
          type="text"
          placeholder="Search for a book"
          value={searchParams?.searchTerm}
          name="searchTerm"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Search
        </button>
      </form>

      <BooksList searchTerm={searchParams?.searchTerm} />

    </main >
  );
}