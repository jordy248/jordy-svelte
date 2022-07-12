<script>

  async function getcurrentlyPlaying() {
    const res = await fetch('/listening/getCurrentlyPlaying.json');
    const data = await res.json();
    return data;
  }

  async function parsecurrentlyPlaying() {
    const data = await getcurrentlyPlaying();

    if (data) {
      const spotifyURL = data?.currentlyPlayingData?.context?.external_urls?.spotify;
      const { name } = data?.currentlyPlayingData?.item;
      const { artists } = data?.currentlyPlayingData?.item;
      const { images } = data?.currentlyPlayingData?.item?.album;
      const albumName = data?.currentlyPlayingData?.item?.album?.name;

      const artistNames = artists.map(a => a.name);
      const artistNamesString = artistNames.join(',');

      const imageSizes = images.map(i => i.height);
      const smallestImageSize = imageSizes.reduce((previousValue, currentValue) =>
              previousValue < currentValue ? previousValue : currentValue
      );
      const largestImageSize = imageSizes.reduce((previousValue, currentValue) =>
              previousValue < currentValue ? currentValue : previousValue
      );
      const smallestImage = images.filter(i => i.height === smallestImageSize);
      const largestImage = images.filter(i => i.height === largestImageSize);
      const imageSize = smallestImage ? smallestImage[0]?.width : null;
      const imageURL = smallestImage ? smallestImage[0]?.url : null;

      return {
        spotifyURL,
        artists,
        name,
        artistNamesString,
        albumName,
        imageURL,
        imageSize
      };
    } else {
      return null;
    }
  }

  let currentlyPlayingPromise = parsecurrentlyPlaying();
</script>

<div class="min-w-full sm:min-w-[400px] border border-solid border-neutral-600 rounded bg-neutral-800 px-2 py-4">
  {#await currentlyPlayingPromise}
    <div class="w-full text-center text-green-400 pb-3 mb-2 border-b border-green-400">
      Getting Current Track...
    </div>
  {:then currentlyPlayingData}
    {#if currentlyPlayingData}
       <div class="w-full text-center text-green-400 pb-3 mb-2 border-b border-green-400">
          Currently Playing
        </div>
        <div class="flex flex-row flex-nowrap justify-between align-center text-neutral-200">
          <div class="flex-[1_0_auto] flex flex-col">
            <img src="{currentlyPlayingData?.imageURL}" width="{currentlyPlayingData?.imageSize}" alt="{currentlyPlayingData?.albumName}">
          </div>
          <div class="flex-[1_1_auto] flex flex-col">
            <div class="font-bold">{currentlyPlayingData?.name}</div>
            <div>{currentlyPlayingData?.artistNamesString}</div>
            <div><a class="block relative text-green-400 underline" href="{currentlyPlayingData?.spotifyURL}" target="_blank">Listen Along</a></div>
          </div>
        </div>
    {:else}
       <div class="w-full text-center text-green-400 pb-3 mb-2 border-b border-green-400">
        Not Currently Listening...
      </div>
    {/if}
  {:catch error}
    <div class="w-full text-center text-green-400 pb-3 mb-2 border-b border-green-400">
      Not Currently Listening...
    </div>
  {/await}
</div>

<style lang="scss">
  .min-w-full {
    &>.flex {
      .flex-col {
        &:last-child {
          a {
            &::after {
              content: ' ';
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' class='svg-triangle' fill='%234ade80' width='100' height='100'%3E%3Cpath d='M 95,50 5,95 5,5 z'/%3E%3C/svg%3E");
              background-size: 10px 10px;
              width: 10px;
              height: 10px;
              display: inline-block;
              margin-left: 0.325em;
            }
          }
        }
      }
    }
  }
</style>

