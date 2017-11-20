class Api::V1::GifsController < Api::V1::BaseController
  def search
    render json: Gif.search(search_params["text"], search_params["offset"])
  end

  private

  def search_params
    params.require(:search).permit(:text, :offset)
  end
end
