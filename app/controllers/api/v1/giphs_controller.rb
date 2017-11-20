class Api::V1::GiphsController < Api::V1::BaseController
  def search
    render json: Giphy.search(search_params)
  end

  private

  def search_params
    params.require(:search).permit(:text)
  end
end
