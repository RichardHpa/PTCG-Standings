export const Shutdown = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <div className="mx-auto max-w-screen-md text-center">
          <p className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            PTCG Standings is shutting down
          </p>
          <p className="mb-4 text-xs tracking-tight text-gray-900 dark:text-white">
            (probably)
          </p>
          <p className="text-md mb-4 font-light text-gray-500 dark:text-gray-400">
            PTCG standings is most likely shutting down sometime in the next few
            months. What started as a little side project to track my friends
            grew into a fully fledged standings tracker for the pokemon trading
            card game. I am the only maintainer and I have loved every minute of
            working on this project, but it has become too much to maintain
            alongside my full time job and other commitments.
          </p>
          <p className="text-md mb-4 font-light text-gray-500 dark:text-gray-400">
            During the bigger tournaments, the site seems to crash more often
            than not. The issue isn't actually to do with this site but the data
            source I use to get the standings. The data source is a third party
            API that is not designed to handle the amount of traffic that this
            site gets during these events. During NAIC I am going to take the
            whole site down and once its finished I will bring it back up but
            will probably remove the live standings feature.
          </p>
          <p className="text-md mb-4 font-light text-gray-500 dark:text-gray-400">
            During the next few weeks I will be looking at other options to
            improve the site's stability and performance. This may include
            making my own API to fetch the data, but I am not sure if this is
            feasible. If you have any suggestions or would like to help out,
            please reach out to me on twitter at{' '}
            <a
              href="https://x.com/RichardHpaNZ"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              RichardHpaNZ
            </a>
            .
          </p>

          <p className="text-md mb-4 font-light text-gray-500 dark:text-gray-400">
            Thank you so much for those of you who had been using the site and
            supporting it. Your feedback and contributions have been invaluable,
            and I am truly grateful for those who have taken the time to report
            bugs, suggest features, and help improve the site. I hope to keep
            the site up and running for as long as possible, but I cannot
            guarantee that it will be around forever.
            <br />- Richard H from PTCG Standings
          </p>
        </div>
      </div>
    </section>
  );
};
